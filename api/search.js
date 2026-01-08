export default async function handler(req, res) {
  res.status(200).json({
    count: 1,
    papers: [
      {
        title: "Vercel API is working",
        journal: "Test",
        pubdate: "2026",
        authors: ["System"],
        abstract: "This confirms the API works on iPhone.",
        doi: null,
        citationCount: 0
      }
    ]
  });
}
