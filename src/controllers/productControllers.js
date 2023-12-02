const productsdetalle = [
    {
      id: 1,
      titulo: "ThinkPad X1 Yoga 6ta Gen(14Intel)",
      opcional: "Laptop 2 en 1 potente y liviana con Intel Eva opcional",
      arranque: "Inicio de sección con un solo toque",
      lapiz: "Lápiz recargable integrado para dibujar o tomar notas",
      detalles: "Ver los detalles del Producto",
      marca:"Marca: Lenovo",
      modelo: "Nombre del modelo: Lenovo Thinkpad",
      pantalla: "Tamaño de pantalla: 14 Pulgadas",
      disco : "Tamaño de disco duro: 512GB SSD",
      cpu:" CPU: Core i7",
      memoria: "Memoria Ram Instalada:16 GB",
      sistema: "Sistema Operativo: Windows 10 Pro",
      grafica: "Tarjeta gráfica: Integrado",
      velocidad : "Velocidad de la CPU: 3 GHz",
      image: "1-asus zenbook pro duo.png",
      price: 2.222222222222222222,
    },
    {
        id: 2,
        titulo: "ThinkPad X1 Yoga 6ta Gen(14Intel)",
        opcional: "Laptop 2 en 1 potente y liviana con Intel Eva opcional",
        arranque: "Inicio de sección con un solo toque",
        lapiz: "Lápiz recargable integrado para dibujar o tomar notas",
        detalles: "Ver los detalles del Producto",
        marca:"Marca: Lenovo",
        modelo: "Nombre del modelo: Lenovo Thinkpad",
        pantalla: "Tamaño de pantalla: 14 Pulgadas",
        disco : "Tamaño de disco duro: 512GB SSD",
        cpu:" CPU: Core i7",
        memoria: "Memoria Ram Instalada:16 GB",
        sistema: "Sistema Operativo: Windows 10 Pro",
        grafica: "Tarjeta gráfica: Integrado",
        velocidad : "Velocidad de la CPU: 3 GHz",
        image: "1-asus zenbook pro duo.png",
        price: 4444444444444,
      },
      {
        id: 3,
        titulo: "ThinkPad X1 Yoga 6ta Gen(14Intel)",
        opcional: "Laptop 2 en 1 potente y liviana con Intel Eva opcional",
        arranque: "Inicio de sección con un solo toque",
        lapiz: "Lápiz recargable integrado para dibujar o tomar notas",
        detalles: "Ver los detalles del Producto",
        marca:"Marca: Lenovo",
        modelo: "Nombre del modelo: Lenovo Thinkpad",
        pantalla: "Tamaño de pantalla: 14 Pulgadas",
        disco : "Tamaño de disco duro: 512GB SSD",
        cpu:" CPU: Core i7",
        memoria: "Memoria Ram Instalada:16 GB",
        sistema: "Sistema Operativo: Windows 10 Pro",
        grafica: "Tarjeta gráfica: Integrado",
        velocidad : "Velocidad de la CPU: 3 GHz",
        image: "1-asus zenbook pro duo.png",
        price: 5555555555555,
      },
      {
        id: 4,
        titulo: "ThinkPad X1 Yoga 6ta Gen(14Intel)",
        opcional: "Laptop 2 en 1 potente y liviana con Intel Eva opcional",
        arranque: "Inicio de sección con un solo toque",
        lapiz: "Lápiz recargable integrado para dibujar o tomar notas",
        detalles: "Ver los detalles del Producto",
        marca:"Marca: Lenovo",
        modelo: "Nombre del modelo: Lenovo Thinkpad",
        pantalla: "Tamaño de pantalla: 14 Pulgadas",
        disco : "Tamaño de disco duro: 512GB SSD",
        cpu:" CPU: Core i7",
        memoria: "Memoria Ram Instalada:16 GB",
        sistema: "Sistema Operativo: Windows 10 Pro",
        grafica: "Tarjeta gráfica: Integrado",
        velocidad : "Velocidad de la CPU: 3 GHz",
        image: "1-asus zenbook pro duo.png",
        price: 666666666666666,
      },
  ];
const detailcontrollers = {
    productDetail: function (req, res) {
        const id = req.params.id;
        const detalle = productsdetalle.find(detalle => detalle.id == id)
        res.render("productDetail", { title: "productDetail", detalle });
    },
    productCart: function (req, res) {
        res.render("productCart", { title: "productCart" });
    },
    productedit: function (req, res) {
        res.render("productedit", { title: "productedit" });
    }
};

module.exports = detailcontrollers;