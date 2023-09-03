#version 330 core
out vec4 FragColor;
in vec3 ourPosition;

void main() {
    // if not add abs(), the left lower corner will become block color
    FragColor = vec4(abs(ourPosition), 1.0f);
}