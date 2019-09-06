import { createParamDecorator } from "@nestjs/common";
import { PaginatorConfig } from "./paginator.config";

export const Paginator = createParamDecorator((data: any, req) => {

  const options = req.query;

  const configOptions = PaginatorConfig.available_filters;

  const limitOptions = configOptions.limit;

  // filter all properties in option not active in the config list
  const filteredList = Object.keys(options)
    .filter(key => configOptions.hasOwnProperty(key) && configOptions[key]["is_active"] === true)
    .reduce((obj, key) => {
      obj[key] = options[key];

      return obj;
    }, {});

  // Add default values for fields not set following the config
  Object.keys(configOptions).forEach(key => {
    if (configOptions[key]["is_active"] === true) {
      if (configOptions[key]["is_default"] === true && !filteredList.hasOwnProperty(key)) {
        filteredList[key] = configOptions[key]["default"];
      }
    }
  });

  // Modify the limit if not the current value is not respecting the config
  if (limitOptions["is_active"]) {
    if (filteredList.hasOwnProperty("limit")) {
      if (options["limit"] > limitOptions["maximum"]) {
        // todo: maybe return an error instead ?
        filteredList["limit"] = limitOptions["maximum"];
      }
    }
  }

  // Add custom label as defined in the config
  filteredList["customLabels"] = PaginatorConfig.custom_labels;

  return filteredList;
});
