module.exports = {
  // Plan
  "/ddd/": [
    {
      text: "DDD",
      collapsible: true,
      children: ["/ddd/README.md"],
    },
  ],
  // AWS
  "/node/": [
    {
      text: "AWS",
      collapsible: true,
      children: [
        "/node/aws/lambda.md",
        "/node/aws/api-gateway.md",
        "/node/aws/clean-up.md",
      ],
    },
  ],
  // Low Code
  "/lowcode/": [
    {
      text: "Low Code",
      collapsible: true,
      children: ["/lowcode/README.md"],
    },
  ],
  // Data & AI
  "/data_ai/": [
    {
      text: "Data & AI",
      collapsible: true,
      children: [
        "/data_ai/python/README.md",
        "/data_ai/langchain/README.md",
        "/data_ai/langflow/README.md",
        "/data_ai/toolbench/README.md",
        "/data_ai/powerbi/README.md",
        "/data_ai/powerbi/data-preparation.md",
        "/data_ai/powerbi/data-model.md",
        "/data_ai/powerbi/data-report.md",
      ],
    },
  ],
};
