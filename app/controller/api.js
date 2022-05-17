'use strict';
const path = require('path')
const fs = require('fs')
const Controller = require('egg').Controller;
const md5 = require('md5')
// const puppeteer = require('puppeteer');
const formidable = require('formidable');
const json = require('formidable/src/plugins/json');
class HomeController extends Controller {
  isPhone(ctx) {
    return ctx.header['user-agent'].includes('Mobile')
  }



  async upload() {

    const {
      ctx
    } = this;

    const form = formidable({ multiples: true, maxFileSize: 2097152000 });

    // not very elegant, but that's for now if you don't want to use `koa-better-body`
    // or other middlewares.
    const files = await new Promise((resolve, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(files);
      });
    });
    const buffer = await fs.promises.readFile(path.resolve(__dirname, files.file.filepath))
    const string = buffer.toString()
    const arr = string.split('\n')
    console.log(arr)
    for (let i = 0; i < arr.length-2; i = i + 300) {
      await this.app.mysql.insert('data', arr.slice(i,i+ 500).map((e) => JSON.parse(e)))
    }
    ctx.body = 'ok';
  }
  

  async runSql() {
    const {
      ctx
    } = this;
    const res = await this.app.mysql.query(ctx.request.body.value)
 
    ctx.body = {
      code: 0,
      value: res
    }
  }
  async init() {

    const {
      ctx
    } = this;
    ctx.body = {
      code: 0
    }
  }




}

module.exports = HomeController;