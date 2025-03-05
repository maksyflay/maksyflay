const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// Cria uma nova instância do cliente
const client = new Client({
  authStrategy: new LocalAuth(), // Salva a autenticação localmente
});

// Gera o QR Code para autenticação
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// Confirmação de que o cliente está pronto
client.on("ready", () => {
  console.log("Client is ready!");
});

// Escuta as mensagens recebidas
client.on("message", async (msg) => {
  const text = msg.body.toLowerCase();

  if (text === "oi") {
    msg.reply("Olá! Como posso ajudar?");
  } else if (text === "tchau") {
    msg.reply("Até logo!");
  } else {
    msg.reply("Desculpe, não entendi. Pode repetir?");
  }
});

// Inicializa o cliente
client.initialize();
