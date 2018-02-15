(function(){
    var id;
    var zone;
    var baseURL = "http://hifi-content.s3.amazonaws.com/milad/Vest/";
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

        var dimensions = {x: 2, y: 2, z: 2};

        zone = Entities.addEntity({
            type: "Zone",
            dimensions: dimensions,
            position: position,
            script: baseURL + 'zone.js',
            parentID: id
        });

        Messages.sendMessage("entity_channel", message )

    };

    Script.scriptEnding.connect(function () {
        Entities.deleteEntity(zone);
    });


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
