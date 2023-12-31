cmake_minimum_required(VERSION 3.0)
project(OpenGLProject)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# add Glad libraries
set(GLAD_SOURCE_DIR "./3rdparty/glad")
include_directories(${GLAD_SOURCE_DIR}/include)
aux_source_directory(./3rdparty/glad/src GLAD_SRC_DIR)

# add GLFW libraries
# set(glfw3_DIR "C:/Program Files (x86)/GLFW/lib/cmake/glfw3")
set(glfw3_DIR "./3rdparty/glfw/lib/cmake/glfw3")
find_package(glfw3 3.3 REQUIRED)

# add stb_image libraries
set(STB_IMAGE_SOURCE_DIR "./3rdparty/stb_image")
include_directories(${STB_IMAGE_SOURCE_DIR})
aux_source_directory(${STB_IMAGE_SOURCE_DIR} STB_IMAGE_SRC_DIR)

# add glm libraries
set(GLM_SOURCE_DIR "./3rdparty")
include_directories(${GLM_SOURCE_DIR})

# add external shader files
include_directories(shader/include)

include_directories(source/include)
file(GLOB SRC_DIR source/src/*.cpp)

# set(SRC_CUR test/windows.cpp)
# set(SRC_CUR test/Triangle/Triangle.cpp)
# set(SRC_CUR test/GLSL/out2frag.cpp)
# set(SRC_CUR test/Texture/Texture1.cpp)
# set(SRC_CUR test/Transform/Transform.cpp)
# set(SRC_CUR test/Coordinate/ZBuffer.cpp)
set(SRC_CUR test/camera/camera3.cpp)
add_executable(OpenGLApp  ${SRC_CUR} ${GLAD_SRC_DIR} 
                          ${SRC_DIR} ${STB_IMAGE_SRC_DIR})

target_link_libraries(OpenGLApp PUBLIC glfw)

# copy file to different location
set(source_file "3rdparty/glfw/bin/glfw3.dll")
# set(destination_file "glfw3.dll")
configure_file(${CMAKE_CURRENT_SOURCE_DIR}/${source_file} ${CMAKE_CURRENT_BINARY_DIR} COPYONLY)