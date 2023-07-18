# Data Preparation

## Query Editor Basics

Source File Connection, Rows & Columns Ops, Filtering Data, Appending Queries, Pivoting & Un-, Formatting, Handling Errors,
Splitting & Extracting Data

### General

- Query

  - different source type
  - one query one source
    - take query as data table

- Clean Data

  - remove duplicate & un-required data
  - fix errors, missing values, empty fields
    - remove blank row against any column
    - invalid value showed in filter
      - red bar indicator
  - format data
    - xx/xx/xxxx has different meaning in different country
  - combine multiple data sources
    - append

### Applied Steps

- Filtered Rows
  - Select any column with empty data
  - Filter by removing `no data` entry
  - Switch between queries in case the red indicator is not gone

### Analyzing Columns

- Hover over the bottom line of the top row
- View / Column Quality
  - By default top 1000 rows against with

### Append

- Append Table
  - Update when underlying table changes

### Transpose

- unstructured table

| Column1    | Column2 | Column3 |
| ---------- | :------ | ------: |
| First Name |         |         |
| Last Name  |         |         |
| Age        |         |         |

- structured table

| First Name | Last Name | Age |
| ---------- | :-------- | --: |
| ...        | ...       | ... |

### Unexpected Filter

- Filtered Row `Step` should not appear before Replaced Value `Step`
  - data may be incomplete due to filtered

### Data Format Errors

- Steps applied against preview data
  - press `apply` to check against all data
    - annoying bug with hanging
      - press `close`
      - reopen

### Pivoting and Un-pivoting

## Query Editor Dive Deep

Data Modeling, Star Schema, Mach Calculation

### Data Model

- Data Warehouse
- Data Model
- Multidimensional Schema

### The star schema

- FACT

  - quantitative data
  - single table
  - foreign keys

- DIM Table
  - descriptive data
  - at least one table with primary keys

### Reference vs Duplicate

- ref

  - deps on

- dup
  - copy

### Merging Queries

- one column in both table are equal

### Enter Data

- create support table

### Fix Merge Error

- detect the unsuccessful merge

  - 193 of 199 rows (6 rows are missing)

- use `left outer anti join` to see what is the problem
- create a new table with enter data

### Conditional Column

- based on value with condition in other column

### Enable Load

- disable if no need to load into `data model`
