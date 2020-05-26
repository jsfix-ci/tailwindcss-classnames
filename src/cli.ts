#!/usr/bin/env node

import commander from 'commander';
import inquirer from 'inquirer';
import { createFileWithGeneratedTypes } from './createFile';

commander
  .option('-c, --config <config>', 'Name or path of the TailwindCSS config file')
  .option('-o, --output <output>', 'Name or path of the file with the generated types', 'tailwindcss-classnames.ts')
  .option('-f, --classesFile <classesFile>', 'Name or path of the file with the custom types', 'none')
  .option('-t, --typeName <typeName>', 'Name of the type exported from file containing the custom classes', 'none')
  .action(({ config, output, classesFile, typeName }) => {
    if (config) {
      createFileWithGeneratedTypes({
        configFilename: config,
        outputFilename: output,
        cutomClassesFilename: classesFile,
        customClassesTypeName: typeName,
      });
    } else {
      inquirer
        .prompt([
          {
            name: 'configFilename',
            type: 'input',
            default: 'tailwind.config.js',
            message: 'Tailwind configuration filename',
          },
          {
            name: 'outputFilename',
            type: 'input',
            default: 'tailwindcss-classnames.ts',
            message: 'Name of the file with generated types',
          },
          {
            name: 'cutomClassesFilename',
            type: 'input',
            default: 'none',
            message: 'Name or path of the file with the custom types',
          },
          {
            name: 'customClassesTypeName',
            type: 'input',
            default: 'none',
            message: 'Name of the type exported from file containing the custom classes',
          },
        ])
        .then(answers => {
          createFileWithGeneratedTypes({
            configFilename: answers.configFilename,
            outputFilename: answers.outputFilename,
            cutomClassesFilename: answers.cutomClassesFilename,
            customClassesTypeName: answers.customClassesTypeName,
          });
        })
        .catch(error => {
          if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
          } else {
            console.error('Something went wrong with the prompt');
          }
        });
    }
  });

commander.parse(process.argv);
