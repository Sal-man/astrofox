var THREE = require('three');
var ShaderCode = require('./ShaderCode.js');

var CircularBlurShader = {
    uniforms: {
        tDiffuse: { type: 't', value: null },
        amount: { type: 'f', value: 1.0 },
        resolution: { type: 'v2', value: new THREE.Vector2(854, 480) }
    },

    vertexShader: ShaderCode.vertex.Basic,
    fragmentShader: ShaderCode.fragment.CircularBlur
};

module.exports = CircularBlurShader;