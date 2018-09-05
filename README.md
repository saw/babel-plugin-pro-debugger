# babel-plugin-pro-debugger
> Babel plugin to enable professional, enterprise-grade debugging

## Introduction

Every team has them: terrible junior devs who don't know how to debug their code. 

Your years of senior-level, enterprise experience has tought you that there are so many better ways to debug.

This babel plugin automates the process of fixing this garbage code to bring it up to date with industry best practies. 

All `debugger;` statements will be replaced with `console.log('---here filename line: linenum---)` statements, ready to deploy to production.

## Babel Compatibility Notes

* Compatible with Babel 7 only

## Useage

```
npm install --save-dev babel-plugin-pro-debugger
```

In your `.babelrc`:

```
{
  "presets": ["env"],
  "plugins": ["pro-debugger"]
}
```
