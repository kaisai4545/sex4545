
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const imageData = req.body.image;
  if (!imageData) {
    return res.status(400).json({ error: "No image data" });
  }

  const response = await fetch(
    "https://discordapp.com/api/webhooks/1366733661457747989/4B7h-9zJltiz2BH__TSKcBK6y862iK3ym7nu3Exi0OvQveJe4cPYEWt5A6clkGUIRxmq",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "新しい画像が送信されました！",
        embeds: [],
        files: [],
      }),
    }
  );

  if (!response.ok) {
    return res.status(500).json({ error: "Failed to send to webhook" });
  }

  return res.status(200).json({ message: "Image sent!" });
}
