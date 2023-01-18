module.exports = {
  // Plan
  "/plan/": [
    {
      text: "Plan",
      collapsible: true,
      children: ["/plan/README.md"],
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
  // Power BI
  "/powerbi/": [
    {
      text: "Power BI",
      collapsible: true,
      children: [
        "/powerbi/README.md",
        "/powerbi/data-preparation.md",
        "/powerbi/data-model.md",
        "/powerbi/data-report.md",
      ],
    },
  ],
};
