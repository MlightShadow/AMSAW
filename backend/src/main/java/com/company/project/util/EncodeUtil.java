package com.company.project.util;

import java.math.BigInteger;
import java.util.UUID;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

@Component
public class EncodeUtil {

    public static String md5(String text) {
        return DigestUtils.md5Hex(text);
    }

    public static String sha1(String text) {
        return DigestUtils.sha1Hex(text);
    }

    public static byte[] salt() {
        BigInteger res = new BigInteger(StringUtils.upperCase(UUID.randomUUID().toString()).replaceAll("-", "")
                + StringUtils.upperCase(UUID.randomUUID().toString()).replaceAll("-", "").substring(0, 30), 16);
        return res.toByteArray();
    }

    public static byte[] verifier(String username, String password, byte[] salt) {
        BigInteger g = new BigInteger("7");
        BigInteger N = new BigInteger("894B645E89E1535BBDAD5B8B290650530801B18EBFBF5E8FAB3C82872A3E9BB7", 16);
        String h1 = EncodeUtil.sha1(StringUtils.upperCase(username + ":" + password));
        String h2 = EncodeUtil.sha1(new String(salt) + h1);

        BigInteger ih2 = new BigInteger(h2.getBytes());
        BigInteger res = g.modPow(ih2, N);

        byte[] verifier = res.toByteArray();
        return res.toByteArray();
    }

}