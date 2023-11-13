# ToolBench

[ToolBench](https://github.com/OpenBMB/ToolBench)

## What

[TOOL LLM for API calls explained](https://www.youtube.com/watch?v=2Qldg68CL_M&list=LL&index=2)

[AI 再进化——武装驼 Tool LLaMA 踩坑记](https://www.youtube.com/watch?v=S0y53R-owYo)

- LLaMA significantly limited in performing higher level tasks (API call).

- ChatGPT has been demonstrated to be able to perform higher level tasks excellently.

- ToolBench is an instruction-tuning `dataset` for tool use which is created automatically by using ChatGPT.

- We prompt ChatGPT to generate diverse human instructions involving these APIs, covering both single-tool and multi-tool scenarios.

- we use ChatGPT to search for a valid solution path (chain of API calls) for each instruction.

- we fine-tune LLaMa on ToolBench and Obtain ToolLLaMA.

- performance of ToolLLaMA is comparable to ChatGPT

- language support not in chinese

- rapid api
  - 16464 REST APIs

## How

- API Retriever
  - Turn your instruction into an api call
- ToolBench
  - A dataset for training any LLM to perform API calls
  - three stages
    - api collection
    - instruction generation
    - solution path annotation
  - general decision making strategy
    - DFSDT
- ToolLLaMA
  - A example of LLM trained on ToolBench on top of LLaMA
