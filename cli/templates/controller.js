exports.controllerTemplate=(name)=>{
    let txt=
`const ${name.capitalized}=require("../models/${name.lower}Model")

exports.create = (req, res, next) => {
    // TODO: implement create logic
};

exports.getAll = (req, res, next) => {
    // TODO: implement get all logic
};

exports.getOne = (req, res, next) => {
    // TODO: implement get one logic
};

exports.update = (req, res, next) => {
    // TODO: implement update logic
};

exports.remove = (req, res, next) => {
    // TODO: implement remove logic
};
`
return txt
}
