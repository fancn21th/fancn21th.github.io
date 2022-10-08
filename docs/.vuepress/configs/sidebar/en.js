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
      text: "aws",
      collapsible: true,
      children: [
        "/node/aws/lambda.md",
        "/node/aws/api-gateway.md",
        "/node/aws/clean-up.md",
      ],
    },
  ],
};
