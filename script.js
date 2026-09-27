// ================= PRODUCT DETAILS =================

const products = {
    auto: {
        title: "Super Metro E-Auto",
        category: "E-AUTO",
        image: "images/Blue colour.png",
        vehicleType: "Electric Auto",
        description:
            "Super Metro E-Auto is a practical electric mobility option designed for everyday transportation and business requirements.",
        features: [
            "Electric-powered transportation",
            "Comfortable passenger space",
            "Economical daily operation",
            "Practical design for city travel",
            "Product details available on enquiry"
        ]
    },

    passenger: {
        title: "Super Metro Passenger",
        category: "PASSENGER MODEL",
        image: "images/Green colour.jpeg",
        vehicleType: "Passenger E-Rickshaw",
        description:
            "Super Metro Passenger is designed to provide a comfortable and economical solution for regular passenger transportation.",
        features: [
            "Comfortable passenger seating",
            "Electric-powered mobility",
            "Suitable for regular transportation",
            "Economical running option",
            "Price and availability on enquiry"
        ]
    },

    rickshaw: {
        title: "Electric E-Rickshaw",
        category: "E-RICKSHAW",
        image: "images/Red colour.png",
        vehicleType: "Electric E-Rickshaw",
        description:
            "This electric e-rickshaw offers an eco-friendly and practical solution for everyday journeys and passenger mobility.",
        features: [
            "Eco-friendly electric operation",
            "Practical passenger transportation",
            "Comfortable design",
            "Suitable for daily use",
            "Complete specifications on enquiry"
        ]
    }
};


// Open Product Modal

function showProductDetails(productId) {

    const product = products[productId];

    if (!product) {
        return;
    }

    document.getElementById("modalProductImage").src = product.image;
    document.getElementById("modalProductImage").alt = product.title;

    document.getElementById("modalProductCategory").textContent =
        product.category;

    document.getElementById("modalProductTitle").textContent =
        product.title;

    document.getElementById("modalProductDescription").textContent =
        product.description;

    document.getElementById("modalVehicleType").textContent =
        product.vehicleType;

    const featureList = document.getElementById("modalFeatures");

    featureList.innerHTML = "";

    product.features.forEach(function (feature) {

        const li = document.createElement("li");
        li.textContent = feature;

        featureList.appendChild(li);

    });

    const message =
        "Hello Shri Shiv Enterprises,%0A%0A" +
        "I am interested in the " + product.title +
        ".%0APlease share the price, availability and complete specifications.";

    document.getElementById("modalWhatsappLink").href =
        "https://wa.me/917380383694?text=" + message;

    document.getElementById("productModal").style.display = "flex";

    document.body.classList.add("modal-open");
}


// Close Product Modal

function closeProductDetails() {

    document.getElementById("productModal").style.display = "none";

    document.body.classList.remove("modal-open");
}


// Close modal by clicking outside

document.getElementById("productModal").addEventListener("click", function (event) {

    if (event.target === this) {
        closeProductDetails();
    }

});


// Close modal using Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeProductDetails();
    }

});


// ================= ENQUIRY FORM =================

document.getElementById("enquiryForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const product = document.getElementById("selectedProduct").value;
    const message = document.getElementById("customerMessage").value;

    const whatsappMessage =
        "Hello Shri Shiv Enterprises,%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Mobile: " + encodeURIComponent(phone) + "%0A" +
        "Interested Product: " + encodeURIComponent(product) + "%0A" +
        "Message: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/917380383694?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

    document.getElementById("enquiryForm").reset();

});

function removeOffer() {

    const savedFestival = localStorage.getItem("festivalUpdate");

    if (!savedFestival) {
        document.getElementById("festivalStatus").textContent =
            "No festival update found.";

        document.getElementById("festivalStatus").style.color = "red";
        return;
    }

    const festivalData = JSON.parse(savedFestival);

    festivalData.offer = "";

    localStorage.setItem(
        "festivalUpdate",
        JSON.stringify(festivalData)
    );

    festivalOffer.value = "";

    previewOffer.textContent = "";

    document.getElementById("festivalStatus").textContent =
        "Special offer removed successfully!";

    document.getElementById("festivalStatus").style.color = "green";
}
function removeFestivalUpdate() {

    localStorage.removeItem("festivalUpdate");

    festivalName.value = "";
    festivalMessage.value = "";
    festivalOffer.value = "";

    previewName.textContent = "Festival Name";
    previewMessage.textContent = "Your festival message will appear here.";
    previewOffer.textContent = "Special offer will appear here.";

    document.getElementById("festivalStatus").textContent =
        "Festival update removed successfully!";

    document.getElementById("festivalStatus").style.color = "green";
}