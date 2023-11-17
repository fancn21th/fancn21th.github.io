module.exports = [
  {
    text: "DDD",
    link: "/ddd/",
  },
  {
    text: "Node",
    children: [
      {
        text: "AWS",
        children: [
          "/node/aws/lambda/",
          "/node/aws/api-gateway/",
          "/node/aws/clean-up/",
        ],
      },
    ],
  },
  {
    text: "Low Code",
    link: "/lowcode/",
  },
  {
    text: "Data & AI",
    children: [
      {
        text: "Data",
        children: ["/data_ai/powerbi/"],
      },
      {
        text: "AI",
        children: [
          "/data_ai/ai/",
          "/data_ai/llms/",
          "/data_ai/langchain/",
          "/data_ai/langflow/",
          "/data_ai/toolbench/",
        ],
      },
      {
        text: "Cookbook",
        children: ["/data_ai/cookbook/"],
      },
    ],
  },
];
