package com.company.project.util;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Component;

@Component
public class EncodeUtil {

    public static String md5(String text) {
        return DigestUtils.md5Hex(text);
    }

    public static String sha1(String text) {
        return DigestUtils.sha1Hex(text);
    }
}