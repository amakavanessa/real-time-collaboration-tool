import { createTransport } from "nodemailer";

const transporter = createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "precious.c.nnam@gmail.com",
    pass: "vhniowxuzrcmztqc",
  },
});

export default transporter;
