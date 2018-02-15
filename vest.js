(function(){
    var id;
    var particleID;
    function getProps(entityID) {
        var properties = Entities.getEntityProperties(entityID);
        return properties;
    }

    this.preload = function(entityID){
        id = entityID;
        var props = getProps(id);
        var position = props.position;
        var message = JSON.stringify({
            entityID: id
        })
        Messages.sendMessage("entity_channel", message )
        var dimensions = {x: 2, y: 2, z: 2};

        Entities.addEntity({
            type: "Zone",
            dimensions: dimensions,
            position: position,
            script: 'http://localhost:3001/zone.js?v=113',
            parentID: id
        });
    };

    var touchPosition;
    var entity;
    var MESSAGE_CHANNEL = "vest_touch";
    Messages.subscribe(MESSAGE_CHANNEL);
    function handleMessages(channel, message, sender){
        if (channel === MESSAGE_CHANNEL){
            var data = JSON.parse(message);
            print("VEST TOUCHED");
            Entities.editEntity(particleID, {
                position: data.intersection,
                visible: true
            });
        }
    }

    var particleProps = {
        "visible": false,
        "type": "ParticleEffect",
        "isEmitting": true,
        "lifespan": "0.09000000357627869",
        "maxParticles": "437",
        "textures": "https://content.highfidelity.com/DomainContent/production/Particles/wispy-smoke.png",
        "emitRate": "530",
        "emitSpeed": "0.4300000071525574",
        "emitDimensions": {
            "x": "0",
            "y": "0.01",
            "z": "0.01"
        },
        "emitOrientation": {
            "x": "0",
            "y": "90",
            "z": "0"
        },
        "emitterShouldTrail": true,
        "particleRadius": "0",
        "radiusSpread": "0.009999999776482582",
        "radiusStart": "0",
        "radiusFinish": "0.03999999910593033",
        "color": {
            "red": "200",
            "blue": "200",
            "green": "200"
        },
        "colorSpread": {
            "red": "0",
            "blue": "0",
            "green": "0"
        },
        "colorStart": {
            "red": "200",
            "blue": "200",
            "green": "200"
        },
        "colorFinish": {
            "red": "255",
            "blue": "41",
            "green": "55"
        },
        "emitAcceleration": {
            "x": "0",
            "y": "0",
            "z": "0"
        },
        "accelerationSpread": {
            "x": "0.01",
            "y": "0.1",
            "z": "0.1"
        },
        "alpha": "1",
        "alphaSpread": "0",
        "alphaStart": "0",
        "alphaFinish": "1",
        "polarStart": "0",
        "polarFinish": "0",
        "azimuthStart": "-180.00000500895632",
        "azimuthFinish": "0"
    }
    particleID = Entities.addEntity(particleProps);



    Messages.messageReceived.connect(handleMessages);

    /*
    RayToEntityIntersectionResult();
    bool intersects;
    bool accurate;
    QUuid entityID;
    float distance;
    BoxFace face;
    glm::vec3 intersection;
    glm::vec3 surfaceNormal;
    QVariantMap extraInfo;
    */
})
