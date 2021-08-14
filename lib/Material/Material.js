import {Color,ShaderSource,Material,formatError} from 'cesium';
import polylineLinkMaterial from './Shaders/polylineLinkMaterial.glsl?raw';
import polylinePulseMaterial from './Shaders/polylinePulseMaterial.glsl?raw';
import polylineGlowMaterial from './Shaders/polylineGlowMaterial.glsl?raw';
import polylineTrailMaterial from './Shaders/polylineTrailMaterial.glsl?raw';
import ElliposidFadeMaterial from './Shaders/ElliposidFadeMaterial.glsl?raw';
import PolylinePulseLinkImage from '../Textures/LinkPulse.png'
import PolylineAttackLinkImage from '../Textures/DotTransparent.png'
import PolylineArrowLinkImage from '../Textures/ArrowOpacity.png'
import PolylineTrailLinkImage from '../Textures/LinkTrail.png'

/**
 * 线的攻击特效Material
 */
Material.PolylineAttackLinkType = 'PolylineAttackLink';
Material.PolylineAttackLinkImage = PolylineAttackLinkImage;
Material._materialCache.addMaterial(Material.PolylineAttackLinkType, {
    fabric: {
        type: Material.PolylineAttackLinkType,
        uniforms: {
            color: new Color(1, 0, 0, 1.0),
            image: Material.PolylineAttackLinkImage,
            time: 0,
        },
        source: polylineLinkMaterial
    },
    translucent: function () {
        return true;
    }
});

/**
 * 线的箭头特效Material
 */
Material.PolylineArrowLinkType = 'PolylineArrowLink';
Material.PolylineArrowLinkImage = PolylineArrowLinkImage;
Material._materialCache.addMaterial(Material.PolylineArrowLinkType, {
    fabric: {
        type: Material.PolylineArrowLinkType,
        uniforms: {
            color: new Color(1, 0, 0, 1.0),
            image: Material.PolylineArrowLinkImage,
            time: 0,
        },
        source: polylineLinkMaterial
    },
    translucent: function () {
        return true;
    }
});

/**
 * 线的滋滋滋特效Material
 */
Material.PolylinePulseLinkType = 'PolylinePulseLink';
Material.PolylinePulseLinkImage = PolylinePulseLinkImage;
Material._materialCache.addMaterial(Material.PolylinePulseLinkType, {
    fabric: {
        type: Material.PolylinePulseLinkType,
        uniforms: {
            color: new Color(1, 0, 0, 1.0),
            image: Material.PolylinePulseLinkImage,
            time: 0,
        },
        source: polylinePulseMaterial
    },
    translucent: function () {
        return true;
    }
});

Material.PolylineGrowLinkType = 'PolylineGrowLinkType';
Material._materialCache.addMaterial(Material.PolylineGrowLinkType, {
    fabric: {
        type: Material.PolylineGrowLinkType,
        uniforms: {
            glowPower: 0.1,
            color: new Color(1, 0, 0, 1.0)
        },
        source: polylineGlowMaterial
    },
    translucent: function () {
        return true;
    }
});

Material.PolylineTrailLinkType = 'PolylineTrailLinkType';
Material.PolylineTrailLinkImage = PolylineTrailLinkImage;
Material._materialCache.addMaterial(Material.PolylineTrailLinkType, {
    fabric: {
        type: Material.PolylineTrailLinkType,
        uniforms: {
            image:Material.PolylineTrailLinkImage,
            color: new Color(1, 0, 0, 1.0),
            time:0
        },
        source: polylineTrailMaterial
    },
    translucent: function () {
        return true;
    }
});

/**
 * 渐变的气泡
 * @type {string}
 */
Material.EllipsoidFadeType = 'EllipsoidFade';
Material._materialCache.addMaterial(Material.EllipsoidFadeType, {
    fabric: {
        type: Material.EllipsoidFadeType,
        uniforms: {
            color: new Color(1, 0, 0, 1.0),
            time: 1,

        },
        source: ElliposidFadeMaterial
    },
    translucent: function () {
        return true;
    }
});

export {default as  PolylineAttackLinkMaterialProperty } from './MaterialProperty/PolylineAttackLinkMaterialProperty';
export {default as  PolylineArrowLinkMaterialProperty } from './MaterialProperty/PolylineArrowLinkMaterialProperty';
export {default as  PolylineGlowLinkMaterialProperty } from './MaterialProperty/PolylineGlowLinkMaterialProperty';
export {default as  PolylinePulseLinkMaterialProperty } from './MaterialProperty/PolylinePulseLinkMaterialProperty';
export {default as  PolylineTrailLinkMaterialProperty } from './MaterialProperty/PolylineTrailLinkMaterialProperty';
export {default as  ElliposidFadeMaterialProperty } from './MaterialProperty/ElliposidFadeMaterialProperty';