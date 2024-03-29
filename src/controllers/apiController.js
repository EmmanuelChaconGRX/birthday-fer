var nodemailer = require('nodemailer');
import con from "../database/config";
export default {
  error: async (req, res) => {
    try {
      res.render('error');
    } catch (error) {
      console.log(error);
    }
  },
  index: async (req, res) => {
    try {
      res.render("index");
    } catch (error) {
      console.log(error);
    }
  },

  getInvitationData: async (req, res) => {
    try {
      console.log("LLEGA");
      console.log(req.body);
      const { id } = req.body;
      const sql = `SELECT * FROM guests WHERE id='${id}' LIMIT 1`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("DB",result[0]);
        if (result[0]) {
          const { id, family, invitations_available, invitations_confirmed } = result[0];
          console.log(result[0]);
          res.status(200).json({
            id,
            family,
            invitations_available,
            invitations_confirmed
          });
        }else{
          res.status(500).json({
            message:'Solicite una nueva URL'
          })
        }
      });
    } catch (error) {
      res.status(500).json({
        error
      })
    }
  },

  guestConfirm: async (req, res) => {
    try {
      console.log("ESTO TENGO",req.body);
      const { id, confirmedGuestsNumber, guestName } = req.body;
      console.log(id, confirmedGuestsNumber);
      const sql = `UPDATE guests SET invitations_confirmed = '${confirmedGuestsNumber}', updated_at = now() WHERE id='${id}'`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record modificado");
        res.status(200).json({
          message: "success",
        });



        //

        var transporter = nodemailer.createTransport(
          {
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
              user:"emmanuelchacon22@gmail.com",
              pass: "yihiwudkqkygfvez"
            }
          }
        )
  //luis@lchacon.com, erika.aponte1@gmail.com
        var mailOptions = {
          from: "Remitente",
          to: "echacon@greicodex.com",
          subject: "¡Hey un Invitado ha confirmado! ✔",
          text: "", // plain text body
          html: `<b>${guestName}</b> ha confirmado su asistencia, numero de invitaciones: <b>${confirmedGuestsNumber}</b>`, // html body
        }
  
        transporter.sendMail(mailOptions, (erro, info) => {
          if (erro) {
            console.log(erro);
          }else{
            console.log("EMAIL ENVIADO");
          }
        });
  
      });
    } catch (error) {
      console.log("error", error);
    }
  },
};
