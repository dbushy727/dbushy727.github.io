var projects = {
    "bagel_works": {
        "title": "Bagel Works",
        "subtitle": "Bagel Shop in Huntington, NY",
        "image_1": "img/bagelworks/bagelworks_computer.png",
        "image_2": "img/bagelworks/menu.png",
        "image_3": "img/bagelworks/contact.png",
        "description": "<p><a target=\"_BLANK\" href=\"http://dbushy727.github.io/bagelworks/theme/homepage.html\">Bagel Works</a> is an informational website designed for a small neighborhood bagel shop in Huntington, New York. The owners wanted a simple one-page website that was very clean, simple and easy to find important information (ie - menu items, catering deals, pricing, location, hours, etc.)</p>",
        "languages": [
            "HTML",
            "CSS",
            "JS",
            "Bootstrap",
            "jQuery"
        ],
        "public": "Y",
        "link": "http://dbushy727.github.io/bagelworks/theme/homepage.html"
    },
    "defined": {
        "title": "Defined",
        "subtitle": "Digital Fitness Tracking Notebook",
        "image_1": "img/defined/workout_screen_computer.png",
        "image_2": "img/defined/history.png",
        "image_3": "img/defined/performance.png",
        "description": "<p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>",
        "languages": [
            "Ruby",
            "JS",
            "HTML",
            "CSS",
            "Rails",
            "Backbone",
            "D3",
            "Handlebars",
            "jQuery",
            "Foundation"
        ],
        "public": "Y",
        "link": "http://defined.herokuapp.com" 
    },
    "gh_discovery": {
        "title": "Github Discovery",
        "subtitle": "Explore The World's Largest Source, Github",
        "image_1": "img/github_discovery/hello_world_computer.png",
        "image_2": "img/github_discovery/trending.png",
        "image_3": "img/github_discovery/categories.png",
        "description": "<p>A discovery application based off the Github API, <a href=\"http://github-discovery.herokuapp.com\" target=\"_BLANK\">Github Discovery</a> allows users to browse or search for their favorite categories, technologies, languages, and buzz words.</p><p>Investigate new ways to collaborate, innovate, or draw inspiration from the world's largest, Github.</p>",
        "languages": [
            "Ruby",
            "JS",
            "SQL",
            "HTML",
            "CSS",
            "Rails",
            "Postgresql",
            "jQuery",
            "Bootstrap"
        ],
        "public": "Y",
        "link": "http://github-discovery.herokuapp.com"
    },
    "mom": {
        "title": "Mom",
        "subtitle": "Virutal Over-Protective Mom",
        "image_1": "img/mom/mom_computer.png",
        "image_2": "img/mom/eat.png",
        "image_3": "img/mom/weather.png",
        "description": "<p>Mom is a reminder service that acts as your personal virtual mom. When you sign up for Mom, you will receive text message reminders for everyday important items that mom can't help but remind you about.</p> <p>Every morning, Mom will deliver the day's weather report as well as your local train status. Mom will also text you some lunch recommendations at noon based on your registered location.</p> <p>Mom uses the Yelp API for food, Weather API for weather, scrapes MTA open data for train status, and uses the Twilio API to send texts.</p>", 
        "languages": [
            "Ruby",
            "JS",
            "SQL",
            "HTML",
            "CSS",
            "Rails",
            "Postgresql",
            "jQuery"
        ],
        "public": "Y",
        "link": "http://my-mom.herokuapp.com"
    },
    "bullish": {
        "title": "Bullish",
        "subtitle": "Stock Tracking Algorithms, Made Easy.",
        "image_1": "img/stock/stock_computer.png",
        "image_2": "img/stock/intraday.png",
        "image_3": "img/stock/testcase.png",
        "description": "<p>Bullish is a stock reasearch tool that allows users to create custom 'Test Cases' that will be run against historical data to validate or inspire trading hypotheses.</p> <p>Bullish presents the user with a large set of data all on one screen. Components include: price, volume, stochastic formulas, intraday charts, change data, averages, etc.</p> <p>All of the visualizations have been custom made from scratch using the D3.js library. This includes: custom candlesticks, scales, sequencing, grids and more.</p>",
        "languages": [
            "PHP",
            "JS",
            "SQL",
            "HTML",
            "CSS",
            "CodeIgniter<br><span class=\"small text-muted\">(Moving to Laravel 5)</span>",
            "MySQL",
            "D3",
            "jQuery",
            "Bootstrap"
        ],
        "public": "N"
    },
    "commandcenter": {
        "title": "Command Center",
        "subtitle": "Rights Management Platform",
        "image_1": "img/cc/computer_home.png",
        "image_2": "img/cc/tools.png",
        "image_3": "img/cc/song.png",
        "description": "<p>Command Center is the platform that allows music rights-holders to track, maintain, and manage their assets, as well as offer a suite of services geared towards rights administration.</p> <p>Command Center has two different sides. The Public facing side and the Admin facing side.</p> <p>Command Center is an ongoing project that is currently owned by HFA.</p>",
        "languages": [
            "PHP",
            "JS",
            "SQL",
            "HTML",
            "CSS",
            "CodeIgniter",
            "MySQL",
            "ChartJS",
            "jQuery",
            "Bootstrap"
        ],
        "public": "N"
    }
};


function replaceModalData() {
    $('.portfolio-link').on("click", function(e) {
        e.preventDefault();
        var project_name = $(this).data("project_name");
        var project = projects[project_name];

        $('#modal_title').text(project.title);
        $('#modal_subtitle').text(project.subtitle);
        $('#modal_image_1').attr("src", project.image_1);
        $('#modal_image_2').attr("src", project.image_2);
        $('#modal_image_3').attr("src", project.image_3);
        $('#modal_description').html(project.description);
        $('#modal_languages li').remove();

        $(project.languages).each(function(i,v) {
            $('#modal_languages').append("<li class=\"list-group-item\">"+v+"</li>");
        });

        if (project.public == "Y") {
            $('#modal_view_project').attr("href", project.link)
            $('#modal_view_project').show();
            $('#modal_not_available').hide();
        } else {
            $('#modal_view_project').hide();
            $('#modal_not_available').show();
        }

    });
}

$(function() {
    replaceModalData();
});