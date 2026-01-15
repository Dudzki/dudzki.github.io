ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32651").setExtent([797855.641923, 829312.068933, 809124.366189, 836928.891816]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var lyr_August152025NDV_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'August 15 2025 NDV<br />\
    <img src="styles/legend/August152025NDV_2_0.png" /> Land Preparation<br />\
    <img src="styles/legend/August152025NDV_2_1.png" /> Early Vegetative Stage/Maturing<br />\
    <img src="styles/legend/August152025NDV_2_2.png" /> Vegetative Growth Stage<br />\
    <img src="styles/legend/August152025NDV_2_3.png" /> Reproductive Stage<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/August152025NDV_2.png",
            attributions: ' ',
            projection: 'EPSG:32651',
            alwaysInRange: true,
            imageExtent: [801220.000000, 829080.000000, 805810.000000, 836340.000000]
        })
    });
var format_Rice_3 = new ol.format.GeoJSON();
var features_Rice_3 = format_Rice_3.readFeatures(json_Rice_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_Rice_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice_3.addFeatures(features_Rice_3);
var lyr_Rice_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rice_3, 
                style: style_Rice_3,
                popuplayertitle: 'Rice',
                interactive: true,
                title: '<img src="styles/legend/Rice_3.png" /> Rice'
            });
var lyr_Flood_Inundation_NDWI_Asuncion_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Flood_Inundation_NDWI_Asuncion<br />\
    <img src="styles/legend/Flood_Inundation_NDWI_Asuncion_4_0.png" /> 0<br />\
    <img src="styles/legend/Flood_Inundation_NDWI_Asuncion_4_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Flood_Inundation_NDWI_Asuncion_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13992950.000000, 836134.674712, 14019280.000000, 866735.349630]
        })
    });
var lyr_Sentinel2_NDWI_Flood_Asuncion_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sentinel2_NDWI_Flood_Asuncion<br />\
    <img src="styles/legend/Sentinel2_NDWI_Flood_Asuncion_5_0.png" /> 0<br />\
    <img src="styles/legend/Sentinel2_NDWI_Flood_Asuncion_5_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sentinel2_NDWI_Flood_Asuncion_5.png",
            attributions: ' ',
            projection: 'EPSG:32651',
            alwaysInRange: true,
            imageExtent: [797970.000000, 828830.000000, 824030.000000, 859100.000000]
        })
    });
var lyr_Sentinel1_Flood_Asuncion_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sentinel1_Flood_Asuncion<br />\
    <img src="styles/legend/Sentinel1_Flood_Asuncion_6_0.png" /> 0<br />\
    <img src="styles/legend/Sentinel1_Flood_Asuncion_6_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sentinel1_Flood_Asuncion_6.png",
            attributions: ' ',
            projection: 'EPSG:32651',
            alwaysInRange: true,
            imageExtent: [797970.000000, 828830.000000, 824030.000000, 859100.000000]
        })
    });
var group_Flood = new ol.layer.Group({
                                layers: [lyr_Flood_Inundation_NDWI_Asuncion_4,lyr_Sentinel2_NDWI_Flood_Asuncion_5,lyr_Sentinel1_Flood_Asuncion_6,],
                                fold: 'open',
                                title: 'Flood'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_August152025NDV_2.setVisible(true);lyr_Rice_3.setVisible(true);lyr_Flood_Inundation_NDWI_Asuncion_4.setVisible(true);lyr_Sentinel2_NDWI_Flood_Asuncion_5.setVisible(true);lyr_Sentinel1_Flood_Asuncion_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleTerrain_1,lyr_August152025NDV_2,lyr_Rice_3,group_Flood];
lyr_Rice_3.set('fieldAliases', {'id': 'id', '_sum': '_sum', '_mean': '_mean', 'area': 'area', });
lyr_Rice_3.set('fieldImages', {'id': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'area': 'TextEdit', });
lyr_Rice_3.set('fieldLabels', {'id': 'no label', '_sum': 'no label', '_mean': 'no label', 'area': 'no label', });
lyr_Rice_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});