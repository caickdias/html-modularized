const { readFileSync, writeFileSync } = require('fs')

const args = process.argv.slice(2);

const [type, name, arg] = args;

const commands = {
    '--noscript': 'ns',
    '-ns': 'ns'
}

const createPage = (name, arg) => {    

    const hasScript = !(commands[arg] == 'ns');        
    const scriptImport = hasScript ? `\n\t<module href="/scripts/${name}.html"></module>` : '';
    
    const page = `<module href="/_layout/layout.html">
    <module href="/content/${name}.html"></module>${scriptImport}
</module>`;

    writeFileSync(`./html/${name}.html`, page);
    writeFileSync(`./html/content/${name}.html`, '');

    if(hasScript){
        writeFileSync(`./html/scripts/${name}.html`, '');
    }
}

switch(type){
    case 'page':
        if(name == null || name == undefined){
            console.log(new Error('[create] No file name'));
            break;
        }
        createPage(name, arg);
        break;
    default:
        console.log(new Error('[create] Command not found'));
        break;
}

