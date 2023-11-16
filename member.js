function skillsMenber() {
    return {
        restrict: "E",
        templateUrl: "modules/skills/vies/member.html",
        cotnroller: "SkillsMemberController",
        controllersAs: "vm",
        bindToController: true,
        scope: {
            member: "="
        }
    }
}