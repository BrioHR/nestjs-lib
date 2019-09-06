# Description

Lib for nestJS projects, developed by the BrioHR Team.

# Installation

```bash
$ npm install --save @briohr/nestjs-lib
```

# Usage


##I. Paginator

### Introduction:

The paginator lib is providing some tools to complete the 
[mongoose-paginate-v2 ](https://www.npmjs.com/package/mongoose-paginate-v2) plugin on nestjs. 

It will provide 2 things:
- A decorator **Paginator** for the controller to get the query params and format them to match the config. 
- A dto type **OptionParamsDto** to create the swagger documentation

### Config:

The config is currently a constant array and will do the following:
- format the name following the following convention:
```
    docs: "data",
    meta: "metadata"
    limit: "perPage",
    page: "currentPage",
    nextPage: "nextPage",
    prevPage: "prevPage",
    totalPages: "totalPages",
    totalDocs: "itemCount",
    pagingCounter: "pagingCounter",
    
```
> Note : data will be returned in **data** and paginator info in **metadata**
- Activate the following options: select, collation, sort, page and limit
- By default if no value is provided, page will be 1 and limit 100.
- A maximum for the limit option is also configured at 1000.


### Example:

```
@Get()
public async findAll(@Paginator() options: OptionParamsDto) {
  return this.leavesService.paginateFindAll(options);
}
```

### Setup:

To paginate a collection, you just need to do the following: 
1. Add the plugin mongoosePaginate in the Schema you want to paginate: 
``LeaveSchema.plugin(mongoosePaginate);``
2. You can now use the paginate method in your service:
``return this.leaveModel.paginate({}, options);``
3. You can now simply add the decorator Paginator in your controller as describe above.

## II. Utils



### Exception:

Two exceptions are currently available in the lib:

- **GlobalException** catches every error and logs them in the std error. You can add simply add 
in ad global exception in your main.ts file.
```
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalException(httpAdapter));
```

- **MongoError** catches every mongoose error and format them in a nicer output. You can add it 
globally like the above or add it in the controller
```
  @UseFilters(MongoExceptionFilter)
  export class LeaveGroupsController {
```

### Pipes:

Some pipes are available for specific input.

- **ObjectIdPipe** checks the input is a valid mongoId
```
  public async findOne(@Param("leaveGroupId", ObjectIdPipe) leaveGroupId: string) {
```


- **StringNotEmptyPipe** checks the string provided is not null and not empty
```
  @Param("leaveTypeName", StringNotEmptyPipe) leaveTypeName: string,
```
