import con from "../database/config";
export default {
  index: async (req, res) => {
    res.render("index");
  },

  getInvitationData: async (req, res) => {
    console.log("LLEGA");
    console.log(req.body);
    const { id } = req.body;
    try {
      const sql = `SELECT * FROM guests WHERE id='${id}' LIMIT 1`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        const { id, family, invitations_available, invitations_confirmed } = result[0];
        console.log(result[0]);
        res.status(200).json({
          id,
          family,
          invitations_available,
          invitations_confirmed
        });
      });
    } catch (error) {}
  },

  guestConfirm: async (req, res) => {
    console.log(req.body);
    const { id, confirmedGuestsNumber } = req.body;
    console.log(id, confirmedGuestsNumber);
    try {
      const sql = `UPDATE guests SET invitations_confirmed = '${confirmedGuestsNumber}', updated_at = now() WHERE id='${id}'`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record modificado");
        res.status(200).json({
          message: "success",
        });
      });
    } catch (error) {
      console.log("error", error);
    }
  },
};
