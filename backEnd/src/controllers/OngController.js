import crypto from "crypto";

import connection from "../database/connection";

class OngController {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  }

  async update(req, res) {
    const { id } = req.params;

    res.json(id);
  }
  async update(req, res) {
    const { id } = req.params;

    const ong = await connection("ongs").where("id", "=", id);

    if (ong.length <= 0) {
      return res.status(404).json({ error: "Ong was not found" });
    }

    await connection("ongs")
      .where("id", "=", id)
      .update(req.body);

    res.json({ ok: "Ong was update with success" });
  }

  async delete(req, res) {
    const { id } = req.params;

    const ong = await connection("ongs").where("id", "=", id);

    if (ong.length <= 0) {
      return res.status(404).json({ error: "Ong was not found" });
    }

    await connection("ongs")
      .where("id", "=", id)
      .delete();

    return res.json({ ok: "Ong was delete with success" });
  }
}

export default new OngController();
