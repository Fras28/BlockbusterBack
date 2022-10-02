import nodemailer from "nodemailer"

 export let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "blockbusterpf@gmail.com", // generated ethereal user
      pass: "lsaomypmspnamwje", // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log("Ready for send email`s")
  })

  