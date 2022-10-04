import nodemailer from "nodemailer"

 export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "blockbusterpf@gmail.com", // generated ethereal user
      pass: "olwlnsfckucnihjn", // generated ethereal password
    },
  });


  