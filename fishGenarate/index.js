const Handlebars = require("handlebars");
const fs = require('fs');
const path = require('path');
const conf = require("./conf.json");
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

function registerHelpers() {
    Handlebars.registerHelper('args', function (properties) {
        return properties.join(", ");
    });
    Handlebars.registerHelper('parameter', function (properties) {
        let pramaters = [];
        for (let i = 0; i < properties.length; ++i) {
            pramaters.push(properties[i].split(":")[0]);
        }
        return pramaters.join(", ");
    });
    Handlebars.registerHelper('isArray', function (value) {
        return Array.isArray(value)
    });
    Handlebars.registerHelper('lowercase', function (aString) {
        return aString.toLowerCase()
    });
    Handlebars.registerHelper('getField', function (aString) {
        return aString.split(":")[0];
    });
}
function registerPartials() {
    Handlebars.registerPartial(
        "person",
        "{{person.name}} is {{person.age}} years old.\n"
    );
}

function genEntity() {
    const entityTemplatePath = path.join(__dirname, conf.src.entity);
    let entityTemplateContent = fs.readFileSync(entityTemplatePath).toString();
    entityTemplateContent = entityTemplateContent.replace(/EntityTemplate/g, "Entity");
    let ret = entityTemplateContent.match(/([\s\S]*)}/)
    entityTemplateContent = ret[1];//去掉最后的右括号

    const entityHbsText = fs.readFileSync(path.join(__dirname, "./hbs/Entity.hbs")).toString();
    const template = Handlebars.compile(entityHbsText);
    let content = template({ template: entityTemplateContent, component: conf.component });

    fs.writeFileSync(path.join(__dirname, conf.output.entity), content);
}

function genComponent(){
    const entityHbsText = fs.readFileSync(path.join(__dirname, "./hbs/Components.hbs")).toString();
    const template = Handlebars.compile(entityHbsText);
    let content = template({component: conf.component });

    fs.writeFileSync(path.join(__dirname, conf.output.comp), content);
}

registerHelpers();
registerPartials();
genEntity();
genComponent();