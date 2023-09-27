#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 TexCoord;

/* #1 */
// uniform sampler2D ourTexture;

/* #2 */
uniform sampler2D texture1;
uniform sampler2D texture2;

void main() {
    /* #1 */
    // FragColor = texture(ourTexture, TexCoord);
    
    // mix color
    // FragColor = texture(ourTexture, TexCoord) * vec4(ourColor, 1.0);
    
    /* #2 */
    FragColor = mix(texture(texture1, TexCoord), texture(texture2, TexCoord), 0.8);
}