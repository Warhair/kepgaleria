$(function () {
    const galeriaTomb = [
        {
            cim: "Repülő",
            kep: "./kepek/airplane.jpg",
            leiras: "Steampunk repülő",
        },
        {
            cim: "Repülőtér",
            kep: "./kepek/airport.jpg",
            leiras: "Steampunk repülőtér",
        },
        {
            cim: "Kereszteződés",
            kep: "./kepek/keresztezodes.jpg",
            leiras: "Steampunk kereszteződés",
        },
        {
            cim: "Műhely",
            kep: "./kepek/muhely.jpg",
            leiras: "Steampunk műhely",
        },
        {
            cim: "Piac",
            kep: "./kepek/piac.jpg",
            leiras: "Steampunk piac",
        },
        {
            cim: "Csatorna",
            kep: "./kepek/steampunk__csatorna.jpg",
            leiras: "Steampunk csatorna",
        },
        {
            cim: "Robot",
            kep: "./kepek/steampunk__robot.jpg",
            leiras: "Steampunk munkaeszköz",
        },
        {
            cim: "Út",
            kep: "./kepek/steampunk__road.jpg",
            leiras: "Steampunk utcai látkép",
        },
        {
            cim: "Vasútállomás",
            kep: "./kepek/trainstation.jpg",
            leiras: "Steampunk vasútállomás",
        },
    ];
    const nagyKartyaSzulo = $("#fokep");
    const galeria = $("#galeria");
    const maxIndex = galeriaTomb.length;
    let aktIndex = 0;
    const nagyKartya = new Kartya(
        galeriaTomb[aktIndex],
        aktIndex,
        nagyKartyaSzulo
    );
    galeriaTomb.forEach((elem, index) => {
        const galeriaKep = new KisKartya(elem, index, galeria);
    });

    $(window).on("kepvaltas", (event) => {
        let dataID = event.detail.index;
        console.log(dataID);
        aktIndex = dataID;
        nagyKartya.setAktKep(galeriaTomb[dataID]);
    });

    $("#bal").on("click", function () {
        aktIndex--;
        if (aktIndex < 0) {
            aktIndex = maxIndex - 1;
        }
        nagyKartya.setAktKep(galeriaTomb[aktIndex]);
    });
    $("#jobb").on("click", function () {
        aktIndex++;
        if (aktIndex > maxIndex - 1) {
            aktIndex = 0;
        }
        nagyKartya.setAktKep(galeriaTomb[aktIndex]);
    });
});
