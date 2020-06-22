(function() {

    navigationBtnMobileClick();
    navigationItemsBindClick();

    function navigationBtnMobileClick() {
        document.querySelector("#menuBtn").addEventListener("click", function() {
            const nav = document.querySelector("nav.navigation");

            if (this.dataset.toggle === "true") {
                nav.style.width = "0%";
                this.dataset.toggle = "false";
            } else {
                nav.style.width = "35%";
                this.dataset.toggle = "true";
            }
        });
    }

    function navigationItemsBindClick() {
        const links = document.querySelectorAll(".navigation ul li");
        
        links.forEach(function(item) {
            item.addEventListener("click", function() {
                links.forEach(function(item) {
                    item.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    }

}());

