import Mail from "../lib/mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: "Pedro Emanoel <tyroxbr@gmail.com>",
      to: `${user.email}`,
      subject: "Cadastro de usuário",
      html: `Olá ${user.name} bem-vindo ao sistema de filas da rocketseat!`,
    });
  },
};
