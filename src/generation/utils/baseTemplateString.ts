export const baseTemplateString = `/* eslint-disable */
/* tslint:disable */
import classnamesLib from 'classnames';

T_CUSTOM_CLASSES_IMPORT_STATEMENT

___ALL_CLASSES___

export type TCustomFormsPluginClasses =
  | 'form-input'
  | 'form-textarea'
  | 'form-select'
  | 'form-multiselect'
  | 'form-checkbox'
  | 'form-radio'

export type TClasses =
  | TLayout
  | TTypography
  | TBackgrounds
  | TBorders
  | TFlexBox
  | TGrid
  | TSpacing
  | TSizing
  | TTables
  | TEffects
  | TTransforms
  | TTransitions
  | TInteractivity
  | TSVG
  | TAccessibility
CUSTOM_FORMS_PLUGIN_TYPE
IMPORTED_T_CUSTOM_CLASSES
  | TPseudoClasses;


export type TTailwindString = string & 'TAILWIND_CLASS';

export type TArgs<T extends TClasses> = T | null | undefined | { [key in T]?: boolean } | TTailwindString;

export type TTailwind<T extends TClasses = TClasses> = (...args: Array<TArgs<T>>) => TTailwindString;

export const classnames: TTailwind = classnamesLib as any;

export const tw = classnames;
`;
