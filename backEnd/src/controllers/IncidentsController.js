import connection from "../database/connection";

class IncidentsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .limit(5)
      .offset((page - 1) * 5)
      .select("*");

    const ongs = await connection("ongs").select("*");

    const formatedIncidents = incidents.map(cases => {
      const ong = ongs.find(ong => ong.id === cases.ong_id);
      return { ...cases, ong };
    });

    res.header("X-Total-Count", count["count(*)"]);

    return res.json(formatedIncidents);
  }

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const ong = await connection("ongs").where("id", "=", ong_id);

    if (ong.length <= 0) {
      return res.status(404).json({ error: "Ong was not found" });
    }

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", "=", id)
      .select("ong_id")
      .first();

    if (!incident) {
      return res.status(404).json({ error: "Incident was not found" });
    }

    if (incident.ong_id !== ong_id) {
      return res
        .status(401)
        .json({ error: "This incident doesn't belong you" });
    }

    await connection("incidents")
      .where("id", "=", id)
      .delete();

    return res.send();
  }
}

export default new IncidentsController();
