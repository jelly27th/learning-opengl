#ifndef _INPUT_H
#define _INPUT_H

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

#include "camera.h"

void processInput(GLFWwindow *window);
void processIntput_mixValue(GLFWwindow *window, float &mixValue);
void processInput_Camera(GLFWwindow *window,
                         glm::vec3 &cameraPos, glm::vec3 &cameraFront, glm::vec3 &cameraUp,
                         float &deltaTime);
void processInput_Camera2(GLFWwindow *window, Camera &camera, float &deltaTime);

#endif