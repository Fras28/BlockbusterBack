import nodemailer from "nodemailer"

 export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAIL, // generated ethereal user
      pass: process.env.PASSNODE, // generated ethereal password
    },
  });


  