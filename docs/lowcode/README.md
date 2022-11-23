# Low Code

## Motivation

:::tip
Why low code is necessary ? How end-user would use the low code product without confusion ?
:::

### Mental Modal

- Where to start ? What is the perspective ?

  - Starting from requirement from end-user (B.A. | Product Owner | UI/UX Designer | QA)
  - Starting from requirement from implementation (Dev | QA)

- What we see is less than what we get

  - when we see a `list` it is just tip of the iceberg above the water
  - so putting the list view on the `canvas` is not enough
  - we really need to care about the customizable UI of the `list` ?
  - what `view` provides us ?
    - the outcome / the view / the output / the data
    - the interaction / the ability to modify data
  - the origin of model

    - what end-user knows is just the biz model in blur image
    - what B.A. knows is data model behind the biz model
    - what designer knows is view of the biz model in consistent manner
    - what dev knows is how data model implemented in certain programming language

  - we are just talking about biz model nothing more
    - UI/UX is details
    - Data Model is details
    - Programming language is details
    - Details varies, Abstraction stays
    - we are designing the `Abstraction`

- Training for abstraction
  - `Abstraction` is hard to understand without visualization
  - `Details` is easy to grasp with misleading

### Model/Feature Table

- application level

| M \ F  | Nav |
| ------ | --: |
| Login  |     |
| Logout |     |
| Page   |     |
| 404    |     |

- business level

| M \ F    | Nav | List | Search | Create | Read | Update | Delete |
| -------- | --: | ---: | -----: | -----: | ---: | -----: | -----: |
| User     |     |      |        |        |      |        |        |
| Role     |     |      |        |        |      |        |        |
| Post     |     |      |        |        |      |        |        |
| Feedback |     |      |        |        |      |        |        |

### MFV

- TBD
