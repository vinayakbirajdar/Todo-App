if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/vinayakbirajdar/.gradle/caches/8.12/transforms/1727645527b8d4a52140297d30f9ce10/transformed/hermes-android-0.78.1-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/vinayakbirajdar/.gradle/caches/8.12/transforms/1727645527b8d4a52140297d30f9ce10/transformed/hermes-android-0.78.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

