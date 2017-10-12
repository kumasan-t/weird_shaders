#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 mouse;
uniform float time;
uniform vec2 resolution;

float plot(vec2 st, float pct) {
	return smoothstep(pct - 0.01, pct, st.y) -
		smoothstep(pct, pct + 0.5, st.y);
}

vec4 blood() {
	vec2 st = gl_FragCoord.xy/resolution;
	float y = sin(st.x * time);
	vec3 color = vec3(0.0);
	
	
	float pct = plot(st,y);
	color = (1.0-pct)*color+pct*vec3(1.0,0.0,0.0);
	return vec4(color,1.0);
}

void main() {
	gl_FragColor = blood();
}
