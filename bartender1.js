var your_drink

var reverse = function(s) {
    return s.split("").reverse().join("");
}

var bartender = {
    str1: "ers",
    str2: reverse("rap"),
    str3: "amet",
    request: function(preference) {
        return preference+".secret word:"+this.str2 + this.str3 + this.str1;
    }
};

bartender.request(your_drink);