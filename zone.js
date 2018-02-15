(function(){
    print("v4 in zone");

    this.enterEntity = function(){
        print("ENTERING ENTITY");
        Script.require('http://localhost:3001/handTouchMOD.js?v=111');
        print(JSON.stringify(ScriptDiscoveryService.getRunning()));
    };
    this.leaveEntity = function(){
        print(JSON.stringify(ScriptDiscoveryService.getRunning()));
        var result = ScriptDiscoveryService.stopScript("handTouchMOD.js");
        print("!!!" + result);
    };
});
