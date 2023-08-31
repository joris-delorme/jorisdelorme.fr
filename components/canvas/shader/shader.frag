// http://erkaman.github.io/glsl-cos-palette/
 
varying vec2 vUv;
varying float vDistort;

uniform float uTime;
uniform float uHue;
uniform float uAlpha;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}   

void main() {
  float distort = vDistort * 2.0;

  vec3 brightness = vec3(0.3, 0.7, 0.3);
  vec3 contrast = vec3(1.0, 0.6, 0.5);
  vec3 oscilation = vec3(0.5, 0.5, 0.62);
  vec3 phase = vec3(1.0, 0.0, 0.0);

  vec3 color = cosPalette(uHue + distort, brightness, contrast, oscilation, phase);

  gl_FragColor = vec4(color, distort);
  gl_FragColor += vec4(0.0, 0.0, 0.0, 0.1);
}