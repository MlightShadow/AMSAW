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
        byte[] sha_pass_hash = EncodeUtil.sha1(StringUtils.upperCase(username) + ":" + StringUtils.upperCase(password))
                .getBytes();
        byte[] mb = new byte[salt.length + sha_pass_hash.length];
        System.arraycopy(salt, 0, mb, 0, salt.length);
        System.arraycopy(sha_pass_hash, 0, mb, salt.length, sha_pass_hash.length);
        byte[] h2 = DigestUtils.sha1Hex(mb).getBytes();
        BigInteger ih2 = new BigInteger("0");
        for (int offset = 0; offset < 40; offset += 4) {
            int int1 = h2[0 + offset] & 0xff;
            int int2 = (h2[1 + offset] & 0xff) << 8;
            int int3 = (h2[2 + offset] & 0xff) << 16;
            int int4 = (h2[3 + offset] & 0xff) << 24;
            String count = String.valueOf(int1 | int2 | int3 | int4);
            ih2.add(new BigInteger(count));
            ih2.add(new BigInteger("1"));
        }

        BigInteger g = new BigInteger("7");
        BigInteger N = new BigInteger("894B645E89E1535BBDAD5B8B290650530801B18EBFBF5E8FAB3C82872A3E9BB7", 16);

        BigInteger res = g.modPow(ih2, N);

        return res.toByteArray();
    }

}