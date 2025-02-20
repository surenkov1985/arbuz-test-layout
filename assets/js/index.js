$(document).on("click", ".btn-burger", function (e) {
	const mobile = $(".mobile");
	const mobileBody = $(".mobile").find(".mobile__body");

	const tl = gsap.timeline();

	if (!$(mobile).hasClass("active")) {
		$(e.currentTarget).addClass("active");
		$(mobile).addClass("active");
		$(mobile).css({ visibility: "visible", opacity: 1 });
		$("body").addClass("hidden");

		tl.to(mobile, { height: "100%" }).to(mobileBody, { opacity: 1, delay: 0.3 }, "<");
	} else {
		$(e.currentTarget).removeClass("active");
		$(mobile).removeClass("active");
		$(mobile).css({ visibility: "visible", opacity: 1 });

		tl.to(mobileBody, { opacity: 0 })
			.to(mobile, { height: 0, delay: 0.2 }, "<")
			.then(() => {
				$("body").removeClass("hidden");
				$(e.currentTarget).removeClass("active");
				$(mobile).removeClass("active");
				$(mobile).css({ visibility: "hidden", opacity: 0 });
			});
	}
});

$(document).on("click", ".accordion_title", function (e) {
	const accordion = $(e.currentTarget).closest(".accordion");
	const accordionBody = $(accordion).find(".accordion_body");
	const accordionContent = $(accordion).find(".accordion_content");

	const tl = gsap.timeline();

	if (!$(accordion).hasClass("active")) {
		$(accordion).addClass("active");
		tl.to(accordionBody, {
			maxHeight: $(accordionContent).innerHeight(),
		});
	} else {
		$(accordion).removeClass("active");
		tl.to(accordionBody, {
			maxHeight: 0,
		});
	}
});
