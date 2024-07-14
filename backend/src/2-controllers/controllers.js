"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.delete_from_shopcar = exports.get_from_shopcar = exports.add_to_shopcar = exports.get_all_products = exports.get_product_by_id = exports.get_img_4 = exports.get_img_3 = exports.get_img_2 = exports.get_img_1 = exports.get_main_img = exports.add_img_fourth = exports.add_img_third = exports.add_img_second = exports.add_img_first = exports.add_main_img = exports.get_all = exports.get_product_by_category = exports.delete_product = exports.edit_product = exports.get_product_by_name = exports.make_product = void 0;
var prisma_1 = require("./../prisma");
var path = require('path');
/*  Funções do Servidor - Protocolo HTTP ---> Por enquanto são apenas as funções CRUD dos Produtos.
    Feito (E por enquanto mantido) por Cristiano Santos Ribeiro Filho A.K.A. Cris - Find me on @cristiano-s-r-filho in Github
    1 - Rota de Post de um Produto: */
function make_product(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, prod_name, prod_price, prod_quant, prod_cat, prod_brand, main_img, img_1, img_2, img_3, img_4, MakeProduct, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, prod_name = _a.prod_name, prod_price = _a.prod_price, prod_quant = _a.prod_quant, prod_cat = _a.prod_cat, prod_brand = _a.prod_brand, main_img = _a.main_img, img_1 = _a.img_1, img_2 = _a.img_2, img_3 = _a.img_3, img_4 = _a.img_4;
                    return [4 /*yield*/, prisma_1["default"].product.create({
                            data: {
                                name: prod_name,
                                price: Number(prod_price),
                                quantity: Number(prod_quant),
                                category: prod_cat,
                                brand: prod_brand,
                                mainImg: main_img,
                                img1: img_1,
                                img2: img_2,
                                img3: img_3,
                                img4: img_4
                            }
                        })];
                case 1:
                    MakeProduct = _b.sent();
                    res.status(200).json({ msg: 'Produto cadastrado na Database', product: MakeProduct });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.log(error_1);
                    res.status(400).json({ msg: "ERRO! Ocorreu um erro ao cadastrar seu produto", err: error_1 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.make_product = make_product;
//  2 - Rota de retornar um produto pelo nome 
function get_product_by_name(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var prod_name, GetProductByName, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    prod_name = req.query.prod_name;
                    return [4 /*yield*/, prisma_1["default"].product.findMany({
                            where: { name: { contains: String(prod_name) } }
                        })];
                case 1:
                    GetProductByName = _a.sent();
                    if (GetProductByName.length === 0) {
                        return [2 /*return*/, console.log('Nenhum produto encontrado pela busca:', prod_name)];
                    }
                    return [2 /*return*/, res.status(200).send(GetProductByName)];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    res.status(400).json({ msg: 'ERRO! Ocorreu um erro ao pegar o seu produto na database', err: error_2 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_product_by_name = get_product_by_name;
//  3 - Rota de Editar um Produto 
function edit_product(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, prod_id, prod_name, prod_price, prod_quant, prod_cat, prod_brand, UpdateProductRegister, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, prod_id = _a.prod_id, prod_name = _a.prod_name, prod_price = _a.prod_price, prod_quant = _a.prod_quant, prod_cat = _a.prod_cat, prod_brand = _a.prod_brand;
                    // Validação - Nome, Preço, Quantidade, Categoria, Marca 
                    if (String(prod_name).match(/[*,!,@,#,$,%]/) != null) {
                        throw new Error('Nome do produto não pode conter Caracteres Especiais');
                    }
                    if (String(prod_price).match(/[A-Z,a-z,*]/)) {
                        throw new Error('O preço deve ser um valor numerico');
                    }
                    if (String(prod_quant).match(/[A-Z,a-z,*]/)) {
                        throw new Error('O preço deve ser um valor numerico');
                    }
                    return [4 /*yield*/, prisma_1["default"].product.update({ where: { id: prod_id },
                            data: {
                                name: prod_name,
                                category: prod_cat,
                                brand: prod_brand,
                                price: prod_price,
                                quantity: prod_quant
                            } })];
                case 1:
                    UpdateProductRegister = _b.sent();
                    res.status(200).json({ msg: 'Produto Atualizado com Sucesso!', register: UpdateProductRegister });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.log(error_3);
                    res.status(400).json({ msg: 'ERRO! Ocorreu um erro ao tentar atualizar o seu produto na database', err: error_3 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.edit_product = edit_product;
// 4 - Rota para deletar um registro :
function delete_product(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var prod_id, DeleteRegister, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    prod_id = req.body.prod_id;
                    return [4 /*yield*/, prisma_1["default"].product["delete"]({ where: { id: Number(prod_id) } })];
                case 1:
                    DeleteRegister = _a.sent();
                    res.status(200).json({ msg: 'Registro de Produto deletado com sucesso', register: DeleteRegister });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    res.status(400).json({ msg: 'ERRO! Ocorreu um erro ao tentar deletar o registro deste produto', err: error_4 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.delete_product = delete_product;
// 5 - Rota para retornar produtos por Categoria: 
function get_product_by_category(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var prod_cat, GetProductList, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    prod_cat = req.params.prod_cat;
                    return [4 /*yield*/, prisma_1["default"].product.findMany({ where: { category: prod_cat } })];
                case 1:
                    GetProductList = _a.sent();
                    res.status(200).json({ msg: "Segue abaixo a lista de todos os produtos da categoria ".concat(prod_cat), list: GetProductList });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    res.status(400).json({ msg: 'ERRO! Ocorreu um erro ao tentar pegar os produtos da categoria', err: error_5 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_product_by_category = get_product_by_category;
// Rota 6 - Fetch em todos os produtos da database 
function get_all(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var GetAll, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prisma_1["default"].product.findMany()];
                case 1:
                    GetAll = _a.sent();
                    if (!GetAll) {
                        return [2 /*return*/, console.log('Nenhum produto no banco de dados')];
                    }
                    res.status(200).send(GetAll);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    res.status(400).json({ msg: "ERRO! Ocorreu um erro ao tentar pegar os produtos da categoria", err: error_6 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_all = get_all;
// Rota de adicionar imagem a um produto pelo Multer 
function add_main_img(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var id_for_edit, imagePathMain, InjectImageonDB, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id_for_edit = req.body.id;
                    imagePathMain = String((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
                    return [4 /*yield*/, prisma_1["default"].product.update({ where: { id: Number(id_for_edit) }, data: {
                                mainImg: imagePathMain
                            } })];
                case 1:
                    InjectImageonDB = _b.sent();
                    res.status(200).json({ msg: 'Imagem Principal adicionada', obj: InjectImageonDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _b.sent();
                    console.log(error_7);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser colocada no server!', err: error_7 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.add_main_img = add_main_img;
// On Test - Rota de adicionar imagem N1
function add_img_first(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var id_for_edit, imagePathFst, InjectImageonDB, error_8;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id_for_edit = req.body.id;
                    imagePathFst = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
                    return [4 /*yield*/, prisma_1["default"].product.update({ where: { id: Number(id_for_edit) }, data: {
                                img1: imagePathFst
                            } })];
                case 1:
                    InjectImageonDB = _b.sent();
                    res.status(200).json({ msg: 'Imagem Principal adicionada', obj: InjectImageonDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _b.sent();
                    console.log(error_8);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser colocada no server!', err: error_8 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.add_img_first = add_img_first;
// On Test - Rota de adicionar imagem N2 
function add_img_second(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var id_for_edit, imagePathSec, InjectImageonDB, error_9;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id_for_edit = req.body;
                    imagePathSec = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
                    return [4 /*yield*/, prisma_1["default"].product.update({ where: { id: Number(id_for_edit) }, data: {
                                img2: imagePathSec
                            } })];
                case 1:
                    InjectImageonDB = _b.sent();
                    res.status(200).json({ msg: 'Imagem Principal adicionada', obj: InjectImageonDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _b.sent();
                    console.log(error_9);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser colocada no server!', err: error_9 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.add_img_second = add_img_second;
// On Test - Rota de adicionar imagem N3 
function add_img_third(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var id_for_edit, imagePathTrd, InjectImageonDB, error_10;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id_for_edit = req.body;
                    imagePathTrd = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
                    return [4 /*yield*/, prisma_1["default"].product.update({ where: { id: Number(id_for_edit) }, data: {
                                img3: imagePathTrd
                            } })];
                case 1:
                    InjectImageonDB = _b.sent();
                    res.status(200).json({ msg: 'Imagem Principal adicionada', obj: InjectImageonDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_10 = _b.sent();
                    console.log(error_10);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser colocada no server!', err: error_10 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.add_img_third = add_img_third;
// On Test - Rota de adicionar imagem N4 
function add_img_fourth(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var id_for_edit, imagePathFth, InjectImageonDB, error_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id_for_edit = req.body;
                    imagePathFth = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
                    return [4 /*yield*/, prisma_1["default"].product.update({ where: { id: Number(id_for_edit) }, data: {
                                img4: imagePathFth
                            } })];
                case 1:
                    InjectImageonDB = _b.sent();
                    res.status(200).json({ msg: 'Imagem Principal adicionada', obj: InjectImageonDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_11 = _b.sent();
                    console.log(error_11);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser colocada no server!', err: error_11 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.add_img_fourth = add_img_fourth;
// On test - Rota de pegar a imagem Principal 
function get_main_img(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id_for_get, GetMainImg, ImagePath, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id_for_get = req.body;
                    return [4 /*yield*/, prisma_1["default"].product.findFirst({ where: { id: id_for_get }, select: { mainImg: true } })];
                case 1:
                    GetMainImg = _a.sent();
                    ImagePath = path.join('/', GetMainImg);
                    res.status(200).send(ImagePath);
                    return [3 /*break*/, 3];
                case 2:
                    error_12 = _a.sent();
                    console.log(error_12);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser retornada do servidor', err: error_12 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_main_img = get_main_img;
// On test - Rota de Pegar a IMG 1: 
function get_img_1(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id_for_get, GetImgFst, ImagePath, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id_for_get = req.body;
                    return [4 /*yield*/, prisma_1["default"].product.findFirst({ where: { id: id_for_get }, select: { img1: true } })];
                case 1:
                    GetImgFst = _a.sent();
                    ImagePath = path.join('/', GetImgFst);
                    res.status(200).send(ImagePath);
                    return [3 /*break*/, 3];
                case 2:
                    error_13 = _a.sent();
                    console.log(error_13);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser retornada do servidor', err: error_13 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_img_1 = get_img_1;
// On test - Rota de pegar a IMG 2: 
function get_img_2(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id_for_get, GetImgSec, ImagePath, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id_for_get = req.body;
                    return [4 /*yield*/, prisma_1["default"].product.findFirst({ where: { id: id_for_get }, select: { img2: true } })];
                case 1:
                    GetImgSec = _a.sent();
                    ImagePath = path.join('/', GetImgSec);
                    res.status(200).send(ImagePath);
                    return [3 /*break*/, 3];
                case 2:
                    error_14 = _a.sent();
                    console.log(error_14);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser retornada do servidor', err: error_14 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_img_2 = get_img_2;
// On teste - Rota de pegar a IMG 3: 
function get_img_3(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id_for_get, GetImgTrd, ImagePath, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id_for_get = req.body;
                    return [4 /*yield*/, prisma_1["default"].product.findFirst({ where: { id: id_for_get }, select: { img3: true } })];
                case 1:
                    GetImgTrd = _a.sent();
                    ImagePath = path.join('/', GetImgTrd);
                    res.status(200).send(ImagePath);
                    return [3 /*break*/, 3];
                case 2:
                    error_15 = _a.sent();
                    console.log(error_15);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser retornada do servidor', err: error_15 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_img_3 = get_img_3;
// On teste - Rota de pegar a IMG 4: 
function get_img_4(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id_for_get, GetImgFth, Imgpath, ImagePath, error_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id_for_get = req.body;
                    return [4 /*yield*/, prisma_1["default"].product.findFirst({ where: { id: id_for_get }, select: { img4: true } })];
                case 1:
                    GetImgFth = _a.sent();
                    Imgpath = path.join(__dirname, '1-model/uploads', GetImgFth);
                    ImagePath = path.join('/', GetImgFth);
                    res.status(200).send(ImagePath);
                    return [3 /*break*/, 3];
                case 2:
                    error_16 = _a.sent();
                    console.log(error_16);
                    res.status(400).json({ msg: 'ERRO! A imagem não pode ser retornada do servidor', err: error_16 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_img_4 = get_img_4;
function get_product_by_id(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, idExists, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, prisma_1["default"].product.findUnique({
                            where: { id: Number(id) }
                        })];
                case 1:
                    idExists = _a.sent();
                    if (!idExists) {
                        return [2 /*return*/, console.log('Id de produto inválida')];
                    }
                    return [2 /*return*/, res.send(idExists)];
                case 2:
                    error_17 = _a.sent();
                    console.error('Deu ruim na recuperação do produto pelo id: ', error_17);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_product_by_id = get_product_by_id;
function get_all_products(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var allProducts, error_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prisma_1["default"].product.findMany()];
                case 1:
                    allProducts = _a.sent();
                    if (!allProducts) {
                        return [2 /*return*/, console.log('Não há produtos cadastrados')];
                    }
                    return [2 /*return*/, res.send(allProducts)];
                case 2:
                    error_18 = _a.sent();
                    console.error('Deu ruim na recuperação de todos os produtos: ', error_18);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_all_products = get_all_products;
// Rota do Carrinho
function add_to_shopcar(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, quant, GetProduct, productStock, prodName, prodPrice, AddProdToShopCar, error_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id = req.body.id;
                    quant = req.body.quant;
                    return [4 /*yield*/, prisma_1["default"].product.findFirst({ where: { id: Number(id) } })];
                case 1:
                    GetProduct = _a.sent();
                    productStock = GetProduct === null || GetProduct === void 0 ? void 0 : GetProduct.quantity;
                    prodName = String(GetProduct === null || GetProduct === void 0 ? void 0 : GetProduct.name);
                    prodPrice = Number(GetProduct === null || GetProduct === void 0 ? void 0 : GetProduct.price);
                    if (quant > Number(productStock)) {
                        throw new Error("O estoque do produto \u00E9 limitado, temos apenas ".concat(productStock, " unidades"));
                    }
                    return [4 /*yield*/, prisma_1["default"].carrinho.create({ data: {
                                name: prodName,
                                quantity: quant,
                                price: prodPrice
                            } })];
                case 2:
                    AddProdToShopCar = _a.sent();
                    res.status(200).send(AddProdToShopCar);
                    return [3 /*break*/, 4];
                case 3:
                    error_19 = _a.sent();
                    console.log(error_19);
                    res.status(400).send(error_19);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.add_to_shopcar = add_to_shopcar;
function get_from_shopcar(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var QueryList, error_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, prisma_1["default"].carrinho.findMany];
                case 1:
                    QueryList = _a.sent();
                    res.status(200).send(QueryList);
                    return [3 /*break*/, 3];
                case 2:
                    error_20 = _a.sent();
                    console.log(error_20);
                    res.status(400).send(error_20);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get_from_shopcar = get_from_shopcar;
function delete_from_shopcar(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var prod_id, DelProdFromShopCar, error_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    prod_id = req.body.id;
                    return [4 /*yield*/, prisma_1["default"].carrinho["delete"]({ where: { id: prod_id } })];
                case 1:
                    DelProdFromShopCar = _a.sent();
                    res.status(200).send(DelProdFromShopCar);
                    return [3 /*break*/, 3];
                case 2:
                    error_21 = _a.sent();
                    console.log(error_21);
                    res.status(400).send(error_21);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.delete_from_shopcar = delete_from_shopcar;
